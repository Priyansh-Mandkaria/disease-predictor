from rest_framework import serializers 
from .models import *

class MajorSympSerializer(serializers.ModelSerializer):
    class Meta:
        model = MajorSymptoms
        fields = ['ms_id','ms_name']

class MorePreSympSerializer(serializers.ModelSerializer):
    class Meta:
        model = MorePreciseSymptoms
        fields = ['mps_id','mps_name','link_1']


class DiseaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = MorePreciseSymptoms
        fields = ['d_id','d_name','major_symptom','precise_symptom']

class MajorSympSerializerAdult(serializers.ModelSerializer):
    class Meta:
        model = MajorSymptomsAdult
        fields = ['ms_id','ms_name']

class MorePreSympSerializerAdult(serializers.ModelSerializer):
    class Meta:
        model = MorePreciseSymptomsAdult
        fields = ['mps_id','mps_name','link_1']
        

class DiseaseSerializerAdult(serializers.ModelSerializer):
    class Meta:
        model = MorePreciseSymptomsAdult
        fields = ['d_id','d_name','major_symptom','precise_symptom']

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostsInfo
        fields = ['username', 'age', 'gender','disease','id']
