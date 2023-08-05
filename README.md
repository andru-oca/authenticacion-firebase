# authenticacion-firebase

Creacion de usuario en Firebase:
- [FireBase Google Account](https://firebase.google.com/)
- Create a  project app >> avoid google analitycs, there is no need to.
- FireBase Dashboard >> Build >> Authentication >> Pick up the best choice for you >> Our case will be Email + Pwd
- Check Documentation : 
    - Project Settings 
    - Following the steps [Documentation FireBase](https://firebase.google.com/docs/web/setup):
        * [PreBuild UI](https://firebase.google.com/docs/auth/web/firebaseui)
        * Add Firebase to the project with CDN:
        * Add FireStore to the project with CDN
        
FireStore:
Agregado de rules

```
{
    "rules":{
        "users":{
            "$uid":{
                ".read":"$uid === auth.uid",
                ".write":"$uid === auth.uid"
            }
        }
    }
}
```