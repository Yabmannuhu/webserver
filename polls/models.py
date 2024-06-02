from django.db import models
from django.db.models import Value
from django.db.models.functions import Concat
from django.db.models.expressions import RawSQL

class FormData(models.Model):
    # Define your Django model fields as usual
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    gender = models.TextChoicesField(max_length=100)
    dob =  models.CharField(max_length=100)
    state =  models.TextField(max_length=100)
    town = models.CharField(max_length=100); 
    address= models.TextField()
    phone =models.IntegerField()
    email= models.EmailField()
    password = models.CharField(max_length=100)
    verify=  models.CharField(max_length=100)
    Zip=  models.CharField(max_length=100)
    # Define a custom method to execute MySQL-specific SQL code
    @classmethod
    def custom_mysql_query(cls):
        # Write your MySQL-specific SQL code here
        query = """
       insert into reg(name,gender,dob,state,town,address,phone,email,password,verify,Id ) 
        """
        # Execute the custom SQL query
        result = cls.objects.annotate(info=RawSQL(query, ())).values_list('info', flat=True)
        return result

# Create your models here.
class MySQLData(models.Model):
    field1 = models.CharField(max_length=100)
    field2 = models.TextField()
    # Add more fields as needed

    class Meta:
        managed = False  # This tells Django not to manage the table's creation, as it's already existing in the MySQL database
        db_table = 'yabman' 