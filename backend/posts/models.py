from django.db import models
class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'

class AuthGroupPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class Diseases(models.Model):
    d_id = models.IntegerField(primary_key=True)
    d_name = models.CharField(max_length=100, blank=True, null=True)
    major_symptom = models.ForeignKey('MajorSymptoms', models.DO_NOTHING, blank=True, null=True)
    precise_symptom = models.ForeignKey('MorePreciseSymptoms', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'diseases'


class DiseasesAdult(models.Model):
    d_id = models.IntegerField(primary_key=True)
    d_name = models.CharField(max_length=100, blank=True, null=True)
    major_symptom = models.ForeignKey('MajorSymptomsAdult', models.DO_NOTHING, blank=True, null=True)
    precise_symptom = models.ForeignKey('MorePreciseSymptomsAdult', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'diseases_adult'


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    id = models.BigAutoField(primary_key=True)
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class Linker(models.Model):
    id = models.IntegerField(primary_key=True)
    final_symp = models.ForeignKey('MorePreciseSymptoms', models.DO_NOTHING, db_column='final_symp', blank=True, null=True)
    final_dis = models.ForeignKey(Diseases, models.DO_NOTHING, db_column='final_dis', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'linker'


class LinkerAdult(models.Model):
    id = models.IntegerField(primary_key=True)
    final_symp = models.ForeignKey('MorePreciseSymptomsAdult', models.DO_NOTHING, db_column='final_symp', blank=True, null=True)
    final_dis = models.ForeignKey(DiseasesAdult, models.DO_NOTHING, db_column='final_dis', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'linker_adult'


class MajorSymptoms(models.Model):
    ms_id = models.IntegerField(primary_key=True)
    ms_name = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'major_symptoms'


class MajorSymptomsAdult(models.Model):
    ms_id = models.IntegerField(primary_key=True)
    ms_name = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'major_symptoms_adult'


class MorePreciseSymptoms(models.Model):
    mps_id = models.IntegerField(primary_key=True)
    mps_name = models.CharField(max_length=250, blank=True, null=True)
    link_1 = models.ForeignKey(MajorSymptoms, models.DO_NOTHING, db_column='link_1', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'more_precise_symptoms'


class MorePreciseSymptomsAdult(models.Model):
    mps_id = models.IntegerField(primary_key=True)
    mps_name = models.CharField(max_length=250, blank=True, null=True)
    link_1 = models.ForeignKey(MajorSymptomsAdult, models.DO_NOTHING, db_column='link_1', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'more_precise_symptoms_adult'


class PatientInfo(models.Model):
    pi_id = models.FloatField(primary_key=True)
    pi_name = models.TextField()
    pi_age = models.IntegerField()
    pi_gender = models.TextField()

    class Meta:
        managed = False
        db_table = 'patient_info'


class PostsInfo(models.Model):
    id = models.BigAutoField(primary_key=True)
    gender = models.CharField(max_length=20)
    username = models.CharField(max_length=20)
    age = models.IntegerField()
    disease = models.TextField()

    class Meta:
        managed = False
        db_table = 'posts_info'


class PostsSympdisease(models.Model):
    id = models.BigAutoField(primary_key=True)
    disease = models.CharField(max_length=20)
    symptom = models.CharField(max_length=20, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'posts_sympdisease'


class VitalInfo(models.Model):
    
    vi_bp = models.FloatField()
    vi_bsl = models.FloatField()
    vi_weight = models.FloatField()
    vi_hieght = models.FloatField()
    aadhar = models.OneToOneField(PatientInfo, models.DO_NOTHING, db_column='aadhar')
    vi_temp = models.CharField(max_length=45)
    vi_id = models.AutoField(primary_key = True)
    class Meta:
        managed = True
        db_table = 'vital_info'