const users = [
    {
        firstName : 'Blerta' ,
        secondName : 'Xheladini' ,
        age : 19 ,
        country : {
            countryName : 'Kosovo',
            city : {
                cityName : 'Prizren',
            }
        }
    }
];
for (const user of users){
    console.log(`My name is ${user.firstName} ${user.secondName} and I am ${user.age} years old.`);
}
