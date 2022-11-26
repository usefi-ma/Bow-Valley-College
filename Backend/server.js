import express, { json } from 'express';
const app = express();
const port = process.env.PORT || 5000;
import cors from 'cors';
import fs from 'fs';
import _ from 'underscore';

app.use(cors());
app.use(json());
app.use(express.urlencoded({ extended: true}));
app.listen(port, () => console.log(`Listening on port ${port}`));



///////////////////////////////////////////////////////////////////////////////
app.get('/student', (req, res) => {
    console.log("List of students");
    const file_location = './student_file.json';
    if (fs.existsSync(file_location)) {
        if (_.isEmpty(obj)) {
            res.send("There is no user information try again")
        } else {
            var data = fs.readFileSync('student_file.json', 'utf8');
            obj = JSON.parse(data);
            console.log(obj);
            res.send(JSON.stringify(obj));

        }//end of else statement
    } else {
        var rese = { success: false, code: 404, data: "No matching data found" };
        res.send(rese);
    }
})

///////////////////////////////////////////////////////////////////////////////

var exists = fs.existsSync('student_file.json');
if (exists) {
    console.log('loading students data');
    var data = fs.readFileSync('student_file.json', 'utf8');
    obj= JSON.parse(data);
} else {
    console.log('Created new dataset object')
    var obj= {student:[]};
}

app.post('/student', (req, res) => {
  

  const StudentID=req.body.studentId;
  const Firstname=req.body.firstname;
  const Lastname= req.body.lastname;
  const Email=req.body.email;
  const Phone=req.body.phone;
  const BirthDate=req.body.birth;
  const Username=req.body.username;
  const Password=req.body.password;
  const DepartmantID=req.body.departmantID;
  const ProgramID=req.body.programID;

    const rs = {StudentID,Firstname,Lastname,Email,Phone,BirthDate,Username,Password,DepartmantID,ProgramID}
    console.log(StudentID + " " + Firstname + " " + Lastname + "  " + Email + " data recieved from client");
    //store the username and password using module 10 lesson 9 example to json file
    if(!rs.Firstname ||!rs.Lastname){ 
        let reply ={
            info:"Please complete the form before you submit it"
        }
        res.send(reply);
        }else{ 
             obj.student.push ( {  
                StudentID:req.body.studentId,
                Firstname:req.body.firstname,
                Lastname: req.body.lastname,
                Email:req.body.email,
                Phone:req.body.phone,
                BirthDate:req.body.birth,
                Username:req.body.username,
                Password:req.body.password,
                DepartmantID:req.body.departmantID,
                ProgramID:req.body.programID
             });
            let data = JSON.stringify(obj, null, 2);  
            fs.writeFile('student_file.json', data, confirm);
           // console.log('new user added to dataset.json')
            function confirm(err)
            {         
            let reply={
                name:req.body.firstname,
                status:"success",
                info:` :Data is recived thank you  ${Firstname}`
             }
             res.send(reply);
             console.log(reply);
          }     
       }
});

//////////////////////////////////////////////////////////////////////////////


































// var exists = fs.existsSync('student_file.json');
// if (exists) {
//     console.log('loading student file');
//     var mydata = fs.readFileSync('student_file.json', 'utf8');
//     obj = JSON.parse(mydata);
// } else {
//     console.log('Created new object')
//     var obj = { student: [] };
// }


// app.post('/student', urlencodedParser, NewStudent);

// function NewStudent(req, res) {
//     response = {
//         fn: req.body.firstname,
//         ln: req.body.lastname,
//     }
//     if (!response.fn || !response.ln) {
//         reply = {
//             msg: "Please complete the form before you submit it"
//         }
//         res.send(reply);
//         console.log(reply)
//     } else {

//         obj.student.push({
//             StudentID:req.body.studentId,
//             Firstname:req.body.firstname,
//             Lastname: req.body.lastname,
//             Email:req.body.email,
//             Phone:req.body.phone,
//             BirthDate:req.body.birth,
//             Username:req.body.username,
//             Password:req.body.password,
//             DepartmantID:req.body.departmantID,
//             ProgramID:req.body.programID
//         });
//         //convert JS object to JSON format
//         let data = JSON.stringify(obj, null, 2);
//         fs.writeFile('student_file.json', data, finished);
//         console.log('Student_file.JSON is updated')
//         function finished(err) {
//             reply = {
//                 StudentID:req.body.studentId,
//                 Firstname: req.body.firstname,
//                 Lastname: req.body.lastname,
//                 Email:req.body.email,
//                 Phone:req.body.phone,
//                 BirthDate:req.body.birth,
//                 Username:req.body.username,
//                 Password:req.body.password,
//                 DepartmantID:req.body.departmantID,
//                 ProgramID:req.body.programID,
//                 status: "success",
//                 msg: "thank you"
//             }
//             res.send(reply);
//             console.log(reply);
//         }
//     }
// }



