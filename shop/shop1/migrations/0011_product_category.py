# Generated by Django 3.1.2 on 2021-04-11 15:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop1', '0010_auto_20210411_2113'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='category',
            field=models.CharField(blank=True, choices=[('electronic', 'electronic'), ('beauty', 'beauty'), ('food', 'food'), ('fashion', 'fashion'), ('sports', 'sports')], max_length=20, null=True),
        ),
    ]