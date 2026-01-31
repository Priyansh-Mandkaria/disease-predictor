"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
# from django.conf.urls import url 
from django.urls import path


from posts.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('getAgeGender/',getAgeGender.as_view(), name='search_disease'),
    path('getMajorSymptoms/',getMajorSymptoms.as_view(), name='major symp'),
    #  path('getPreSymptoms/',getPreciseSymptoms.as_view(), name='Pre symp'),
    path('getDiseases/',getDiseases.as_view(), name='Pre symp'),
    path('patVitals/',PatVitals.as_view(), name='Pre symp'),
    path('patHistory/',PatHistory.as_view(), name='Pre symp'),
    path('addDisease/',addDisease.as_view(), name='Pre symp'),

    
]
