# from django.shortcuts import render
# from rest_framework import status
# # Create your views here. 
# from rest_framework.views import APIView 
# from rest_framework.decorators import api_view
# from rest_framework.response import Response 
# from . serializer import *
# from .models import *
# from .serializer import *
# # Create your views here. 

# class getMajorSymptoms(APIView):
#     def get(self, request, *args, **kwargs):
#         majorSymptoms = MajorSymptoms.objects.all().values('ms_name')
#         # serializer = MajorSympSerializer(majorSymptoms, many=True)
#         list = [item['ms_name'] for item in majorSymptoms]
#         return Response(list, status=status.HTTP_200_OK)
#     def post(self, request, *args, **kwargs):
#         symptoms = request.data.get('symptoms',[])
#         print(symptoms)
#         preSympList=[]
#         ms_ids=[]
#         for symptom in symptoms:
#          symptom = symptom+"\r"
#          print(symptom)
  
#          try:
#             ms1 = MajorSymptoms.objects.get(ms_name__exact=symptom)
#             print(symptom)
#             serializer1 = MajorSympSerializer(ms1)
#             ms_id = ms1.ms_id
#             ms_ids.append(ms_id)
            
#             precise = MorePreciseSymptoms.objects.filter(link_1=ms_id)
#             serializer2 = MorePreSympSerializer(precise,many=True)
#             # preSympId = [id['mps_id'] for id in serializer2.data]
#             preSympList.extend(item['mps_name'] for item in serializer2.data)
        
#          except MorePreciseSymptoms.DoesNotExist:
#             return Response({'error': 'Disease not found'}, status=status.HTTP_404_NOT_FOUND)
#         request.session['ms_ids']= ms_ids
#         print(ms_ids)
#         return Response(preSympList, status=status.HTTP_200_OK)
        
# class getPreciseSymptoms(getMajorSymptoms):
#     def post(self, request, *args, **kwargs):
#         preSymps = request.data.get('preSymps',[])
#         result = []
#         mps_ids=[]
#         for preSymp in preSymps:
#          try:
#             mps = MorePreciseSymptoms.objects.get(mps_name=preSymp)
#             serializer = MorePreSympSerializer(mps)
#             mps_id = mps.mps_id
#             mps_ids.append(mps_id)
            
#             result.append(serializer.data)
            
#          except MorePreciseSymptoms.DoesNotExist:
#             result.append({'error': f'Disease not found for {preSymp}'})
#         request.session['mps_id'] = mps_ids
#         return Response(result, status=status.HTTP_200_OK)
#     def get(self, request, *args, **kwargs):
#         diseases = MorePreciseSymptoms.objects.all()
#         serializer = MorePreSympSerializer(diseases, many=True)
#         return Response(serializer.data, status=status.HTTP_200_OK)   
# class getDiseases(getPreciseSymptoms):
    
#     def post(self, request, *args, **kwargs):
#         ms_ids = request.session.get('ms_ids')
#         print(ms_ids)
#         diseases=[]
#         for ms_id in ms_ids:
#             disease_obj = Diseases.objects.filter(major_symptom__exact = ms_id)
#             for disease in disease_obj:
#              disease_name = disease.d_name
#              diseases.append(disease_name)
#         return Response(diseases, status=status.HTTP_200_OK)

from django.shortcuts import render
from rest_framework import status
# Create your views here. 
from rest_framework.views import APIView 
from rest_framework.decorators import api_view
from rest_framework.response import Response 
from . serializer import *
from .models import *
from .serializer import *
# Create your views here. 


class PatInfo:
    def __init__(self):
        self._age = None
        self._gender = None
        self._aadhar = None
        self._name = None 
        self._temp = None 
        self._bp = None 
        self._weight = None
        self._height = None
        self._diabetes = None

    def set_age(self, age):
        self._age = age

    def get_age(self):
        return self._age

    def set_gender(self, gender):
        self._gender = gender

    def get_gender(self):
        return self._gender
    
    def set_name(self, name):
        self._name= name

    def get_name(self):
        return self._name
    
    def set_aadhar(self, aadhar):
        self._aadhar = aadhar

    def get_aadhar(self):
        return self._aadhar
    
    def set_temp(self,temp):
        self._temp = temp
    
    def get_temp(self):
        return self._temp
    
    def set_weight(self,weight):
        self._weight = weight
    
    def get_weight(self):
        return self._weight
    
    def set_height(self,height):
        self._height = height
    
    def get_height(self):
        return self._height
    
    def set_bp(self,bp):
        self._bp = bp
    
    def get_bp(self):
        return self._bp
    
    def set_diabetes(self,diabetes):
        self._diabetes = diabetes
    
    def get_diabetes(self):
        return self._diabetes
    



# Instantiate PatientInfo object
pat_info = PatInfo()

class getAgeGender(APIView):
    def post(self, request, *args, **kwargs):
        age = request.data.get('age')
        gender = request.data.get('gender')
        name = request.data.get('name')
        aadhar = request.data.get('aadhar')

        # Set age and gender using setter methods
        

        if PatientInfo.objects.filter(pi_id=aadhar).exists():
            # return Response({"message": "Aadhar number already exists"}, status=status.HTTP_400_BAD_REQUEST)
            print("patient already exista")
            
        else:
            info = PatientInfo.objects.create(pi_age=age, pi_gender=gender,pi_id=aadhar,pi_name = name)

        # pat_info = PatInfo()
        pat_info.set_age(age)
        pat_info.set_gender(gender)
        pat_info.set_aadhar(aadhar)
        pat_info.set_name(name)
        print(pat_info.get_age())
        print(pat_info.get_aadhar())
        
        return Response(status=status.HTTP_200_OK)
    
class PatVitals(APIView):
    def post(self, request, *args, **kwargs):
        temp = request.data.get('temp')
        bp = request.data.get('bp')
        diabetes = request.data.get('diabetes')
        height = request.data.get('height')
        weight = request.data.get('weight')
        pat_info.set_temp(temp)
        pat_info.set_bp(bp)
        pat_info.set_height(height)
        pat_info.set_weight(weight)
        pat_info.set_diabetes(diabetes)
    

        aadhar = pat_info.get_aadhar()
        print(aadhar)
        try:
            patient_info = PatientInfo.objects.get(pi_id=aadhar)
        except PatientInfo.DoesNotExist:
            return Response({"message": "Patient with the provided Aadhar does not exist"}, status=status.HTTP_400_BAD_REQUEST)

        # Create VitalInfo associated with the patient
        VitalInfo.objects.create(vi_bp=bp, vi_weight=weight, vi_hieght=height, vi_temp=temp, vi_bsl=diabetes, aadhar=patient_info)

        return Response(status=status.HTTP_200_OK) 
    
class PatHistory(APIView):
    def post(self, request, *args, **kwargs):
        aadhar = pat_info.get_aadhar()
        print(aadhar)
        try:
            patient_info = PatientInfo.objects.get(pi_id=aadhar)
            print("aadhar found")
        except PatientInfo.DoesNotExist:
            return Response({'error': 'Patient not found'}, status=404)

        # Retrieve all VitalInfo related to the patient
        vital_infos = VitalInfo.objects.filter(aadhar=patient_info)

        if not vital_infos:
            return Response({'error': 'Vital info not found'}, status=404)

        # Construct list of response data for each history
        histories = []
        for vital_info in vital_infos:
            history_data = {
                'vi_bp': vital_info.vi_bp,
                'vi_bsl': vital_info.vi_bsl,
                'vi_weight': vital_info.vi_weight,
                'vi_height': vital_info.vi_hieght,
                'vi_temp': vital_info.vi_temp
                # Add more fields as needed
            }
            histories.append(history_data)

        return Response({'histories': histories})



class getMajorSymptoms(APIView):
    def get(self, request, *args, **kwargs):
        age = pat_info.get_age()
        print(age)
        # Determine which model to use based on age
        if age and int(age) < 5:
            majorModel = MajorSymptoms.objects
        else:
            majorModel = MajorSymptomsAdult.objects
        
        majorSymptoms = majorModel.all().values('ms_name')
        list = [item['ms_name'] for item in majorSymptoms]
        return Response(list, status=status.HTTP_200_OK)
        
    def post(self, request, *args, **kwargs):
        age = pat_info.get_age()
        
        # Determine which model to use based on age
        if age and int(age) < 5:
            majorModel = MajorSymptoms.objects
            preModel = MorePreciseSymptoms.objects
        else:
            majorModel = MajorSymptomsAdult.objects
            preModel = MorePreciseSymptomsAdult.objects
        
        symptoms = request.data.get('symptoms',[])
        preSympList=[]
        ms_ids=[]
        for symptom in symptoms:
            symptom = symptom + "\r"
  
            try:
                ms1 = majorModel.get(ms_name__exact=symptom)
                ms_id = ms1.ms_id
                ms_ids.append(ms_id)
            
                precise = preModel.filter(link_1=ms_id)
                preSympList.extend(item['mps_name'] for item in precise.values('mps_name'))
        
            except preModel.DoesNotExist:
                return Response({'error': 'Disease not found'}, status=status.HTTP_404_NOT_FOUND)
        
        return Response(preSympList, status=status.HTTP_200_OK)


class getPreciseSymptoms(getMajorSymptoms):
    def post(self, request, *args, **kwargs):
        age = pat_info.get_age()
        
        # Determine which model to use based on age
        if age and int(age) < 5:
            preModel = MorePreciseSymptoms.objects
        else:
            preModel = MorePreciseSymptomsAdult.objects
        
        majorModel = request.session.get('majorModel')
        diseaseModel = request.session.get('diseaseModel')
        preSymps = request.data.get('preSymps',[])
        print(preSymps)
        result = []
        mps_ids=[]
        for preSymp in preSymps:
            try:
                mps = preModel.get(mps_name=preSymp)
                serializer = MorePreSympSerializer(mps)
                mps_id = mps.mps_id
                mps_ids.append(mps_id)
                result.append(serializer.data)
            
            except preModel.DoesNotExist:
                result.append({'error': f'Disease not found for {preSymp}'})
            
            except preModel.MultipleObjectsReturned:
                # If multiple objects are found, get the first one
                mps = preModel.filter(mps_name=preSymp).first()
                serializer = MorePreSympSerializer(mps)
                mps_id = mps.mps_id
                mps_ids.append(mps_id)
                result.append(serializer.data)
        
        request.session['mps_id'] = mps_ids
        return Response(result, status=status.HTTP_200_OK)
    
    def get(self, request, *args, **kwargs):
        age = request.session.get('age')
        
        # Determine which model to use based on age
        if age and int(age)< 5:
            preModel = MorePreciseSymptoms.objects
        else:
            preModel = MorePreciseSymptomsAdult.objects
        
        diseases = preModel.all()
        serializer = MorePreSympSerializer(diseases, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)   

class getDiseases(getPreciseSymptoms):
    def post(self, request, *args, **kwargs):
        temp = pat_info.get_temp()
        bp = pat_info.get_bp()
        weight = pat_info.get_weight()
        height = pat_info.get_height()
        diabetes = pat_info.get_diabetes()
        aadhar = pat_info.get_aadhar()
        print(aadhar)
        
        print(temp)
        age = pat_info.get_age()
        if age and int(age) < 5:
            preModel = MorePreciseSymptoms.objects
        else:
            preModel = MorePreciseSymptomsAdult.objects
        
        majorModel = request.session.get('majorModel')
        diseaseModel = request.session.get('diseaseModel')
        preSymps = request.data.get('preSymps', [])
        print(preSymps)
        result = []
        mps_ids = []
        for preSymp in preSymps:
            try:
                mps = preModel.get(mps_name=preSymp)
                serializer = MorePreSympSerializer(mps)
                mps_id = mps.mps_id
                mps_ids.append(mps_id)
                result.append(serializer.data)
            
            except preModel.DoesNotExist:
                result.append({'error': f'Disease not found for {preSymp}'})
            
            except preModel.MultipleObjectsReturned:
                # If multiple objects are found, get the first one
                mps = preModel.filter(mps_name=preSymp).first()
                serializer = MorePreSympSerializer(mps)
                mps_id = mps.mps_id
                mps_ids.append(mps_id)
                result.append(serializer.data)
        
        # Determine which model to use based on age
        if age and int(age) < 5:
            diseaseModel = Diseases.objects
        else:
            diseaseModel = DiseasesAdult.objects
        
        print(mps_ids)
        
        # ===== NEW: Disease Probability Calculation =====
        # Count how many symptoms match each disease
        disease_scores = {}
        total_symptoms = len(mps_ids)
        
        for mps_id in mps_ids:
            disease_objs = diseaseModel.filter(precise_symptom__exact=mps_id)
            for disease_obj in disease_objs:
                disease_name = disease_obj.d_name
                if disease_name:
                    disease_name = disease_name.strip()
                    if disease_name in disease_scores:
                        disease_scores[disease_name] += 1
                    else:
                        disease_scores[disease_name] = 1
        
        # Calculate probability percentage for each disease
        disease_results = []
        for disease_name, match_count in disease_scores.items():
            # Probability = (matched symptoms / total symptoms entered) * 100
            probability = round((match_count / total_symptoms) * 100, 1) if total_symptoms > 0 else 0
            disease_results.append({
                "disease": disease_name,
                "probability": probability,
                "matched_symptoms": match_count,
                "total_symptoms": total_symptoms
            })
        
        # Sort by probability (highest first)
        disease_results.sort(key=lambda x: x['probability'], reverse=True)
        
        # Return results with probability scores
        return Response({
            "predictions": disease_results,
            "message": f"Found {len(disease_results)} possible diseases based on {total_symptoms} symptoms"
        }, status=status.HTTP_200_OK)
    
class addDisease(APIView):
    def post(self,request):
      age = pat_info.get_age()
      if age and int(age)<5:
       majorSymp = request.data.get('majorSymp')
       last_element = MajorSymptoms.objects.order_by('ms_id').last()
       ms_id = last_element.ms_id+1
       MajorSymptoms.objects.create(ms_id=ms_id,ms_name=majorSymp)
      if age and int(age)>5:
       majorSymp = request.data.get('majorSymp')
       last_element = MajorSymptomsAdult.objects.order_by('ms_id').last()
       ms_id = last_element.ms_id+1
       MajorSymptomsAdult.objects.create(ms_id=ms_id,ms_name=majorSymp)
      return Response("done")
    
