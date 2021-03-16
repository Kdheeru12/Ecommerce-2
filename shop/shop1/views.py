from django.shortcuts import render,HttpResponse
from django.core.mail import send_mail
from django.conf import settings
# Create your views here.
def hello(request):
    send_mail(
    'Regarding Login Into the WEBSITE',
    'testing',
    settings.EMAIL_HOST,
    ['dheerukreddy@gmail.com'],
    )
    # import smtplib 
    
    # # creates SMTP session 
    # s = smtplib.SMTP('smtp.gmail.com', 587) 
    
    # # start TLS for security 
    # s.starttls() 
    
    # # Authentication 
    # s.login("dheerukreddy@gmail.com", "Kmunna@!22001") 
    
    # # message to be sent 
    # message = "Message_you_need_to_send"
    
    # # sending the mail 
    # s.sendmail("dheerukreddy@gmail.com", "dheerukreddy@gmail.com", message) 
    
    # # terminating the session 
    # s.quit()

    return HttpResponse('hdddd') 