import express, { json } from 'express';
const app = express();
const port = process.env.PORT || 5000;
import cors from 'cors';
import fs from 'fs';
import _ from 'underscore';

app.use(cors());
app.use(json());
app.use(express.urlencoded({ extended: true }));
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
    obj = JSON.parse(data);
} else {
    console.log('Created new dataset object')
    var obj = { student: [] };
}

app.post('/student', (req, res) => {

    const StudentID = req.body.studentId;
    const Firstname = req.body.firstname;
    const Lastname = req.body.lastname;
    const Email = req.body.email;
    const Phone = req.body.phone;
    const BirthDate = req.body.birth;
    const Username = req.body.username;
    const Password = req.body.password;
    const DepartmantID = req.body.departmant;
    const ProgramID = req.body.program;
    const Role = req.body.role;

    const rs = { StudentID, Firstname, Lastname, Email, Phone, BirthDate, Username, Password, DepartmantID, ProgramID, Role }
    console.log(StudentID + " " + Firstname + " " + Lastname + "  " + Email + " data recieved from client");
    if (!rs.Firstname || !rs.Lastname) {
        let reply = {
            info: "Please complete the form before you submit it"
        }
        res.send(reply);
    } else {
        obj.student.push({
            StudentID: req.body.studentId,
            Firstname: req.body.firstname,
            Lastname: req.body.lastname,
            Email: req.body.email,
            Phone: req.body.phone,
            BirthDate: req.body.birth,
            Username: req.body.username,
            Password: req.body.password,
            DepartmantID: req.body.departmant,
            ProgramID: req.body.program,
            Role: req.body.role,
        });
        let data = JSON.stringify(obj, null, 2);
        fs.writeFile('student_file.json', data, confirm);
        // console.log('new user added to dataset.json')
        function confirm(err) {
            let reply = {
                name: req.body.firstname,
                status: "success",
                info: ` :Data is recived thank you  ${Firstname}`
            }
            res.send(reply);
            console.log(reply);
        }
    }
});

//////////////////////////////////////////////////////////////////////////////programs
app.get('/Programs', (req, res) => {
    console.log("List of programs");
    const file_location = './student_file.json';
    if (fs.existsSync(file_location)) {
        if (_.isEmpty(obj)) {
            res.send("There is no origram information try again")
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
///////////////////////////////////////////////////////////////////////////////courses
app.get('/Courses', (req, res) => {
    console.log("List of Courses");
    const file_location = './student_file.json';
    if (fs.existsSync(file_location)) {
        if (_.isEmpty(obj)) {
            res.send("There is no origram information try again")
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

///////////////////////////////////////////////////////////////////////////////course registerationm

var exists = fs.existsSync('student_file.json');
if (exists) {
    var data = fs.readFileSync('student_file.json', 'utf8');
    obj = JSON.parse(data);
} else {
    console.log('Created new dataset object')
    var obj = { RegisterCourse: [] };
}

app.post('/registerCourse', (req, res) => {
    const StudentID = req.body.studentId;
    const CourseID = req.body.courseId;
    const TermID = req.body.termId;

    const rs = { StudentID, CourseID, TermID }
    console.log(StudentID + " " + CourseID + " " + TermID + "  data recieved from client");
    if (!rs.StudentID || !rs.CourseID) {
        let reply = {
            info: "Please complete the form before you submit it"
        }
        res.send(reply);
    } else {
        for (let i = 0; i < CourseID.length; i++) {
            obj.RegisterCourse.push({
                StudentID: req.body.studentId,
                CourseID: req.body.courseId[i],
                TermID: req.body.termId,
            });
        }
        let data = JSON.stringify(obj, null, 2);
        fs.writeFile('student_file.json', data, confirm);
        // console.log('new user added to dataset.json')
        function confirm(err) {
            let reply = {
                StudentID: req.body.studentId,
                status: "success",
                info: ` :Data is recived thank you  ${StudentID}`
            }
            res.send(reply);
            console.log(reply);
        }
    }
});

//////////////////////////////////////////////////////////////////////////////Form

var exists = fs.existsSync('student_file.json');
if (exists) {
    var data = fs.readFileSync('student_file.json', 'utf8');
    obj = JSON.parse(data);
} else {
    var obj = { Form: [] };
}

app.post('/Form', (req, res) => {
    const FormID = req.body.formId;
    const FirstName = req.body.firstName;
    const LastName = req.body.lastName;
    const Title = req.body.title;
    const Email = req.body.email;
    const Message = req.body.message;

    const rs = { FormID, FirstName, LastName, Title, Email, Message }
    console.log(FirstName + " " + LastName + " " + Title + "  data recieved from client");
    if (!rs.FirstName || !rs.LastName) {
        let reply = {
            info: "Please complete the form before you submit it"
        }
        res.send(reply);
    } else {
        obj.Form.push({
            FormID: req.body.formId,
            FirstName: req.body.firstName,
            LastName: req.body.lastName,
            Title: req.body.title,
            Email: req.body.email,
            Message: req.body.message,
        });
        let data = JSON.stringify(obj, null, 2);
        fs.writeFile('student_file.json', data, confirm);
        function confirm(err) {
            let reply = {
                FirstName: req.body.firstName,
                status: "success",
                info: ` :Data is recived thank you  ${FirstName}`
            }
            res.send(reply);
            console.log(reply);
        }
    }
});

////////////////////////////////////////////////////////////////////////////list of degree
app.get('/Degree', (req, res) => {
    console.log("List of degree");
    const file_location = './student_file.json';
    if (fs.existsSync(file_location)) {
        if (_.isEmpty(obj)) {
            res.send("There is no degree information try again")
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
////////////////////////////////////////////////////////////////////////////list of department
app.get('/Department', (req, res) => {
    console.log("List of department");
    const file_location = './student_file.json';
    if (fs.existsSync(file_location)) {
        if (_.isEmpty(obj)) {
            res.send("There is no department information try again")
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

/////////////////////////////////////////////////////////////////////////////AddCourse

var exists = fs.existsSync('student_file.json');
if (exists) {
    var data = fs.readFileSync('student_file.json', 'utf8');
    obj = JSON.parse(data);
} else {
    var obj = { Course: [] };
}

app.post('/Course', (req, res) => {

    const CourseID = req.body.courseId;
    const Name = req.body.name;
    const StartDate = req.body.startDate;
    const EndDate = req.body.endDate;
    const Fees = req.body.fees;
    const Description = req.body.description;
    const ProgramID = req.body.programId;
    const TermID = req.body.termId;
    const DepartmentID = req.body.departmentId;
    const DegreeID = req.body.degreeId;
    const selMode = req.body.selMode;

    const rs = { CourseID, Name, StartDate, EndDate, Fees, Description, DepartmentID, DegreeID, ProgramID, TermID, selMode }
    console.log(CourseID + " " + Name + " " + StartDate + "  data recieved from client");
    if (!rs.CourseID || !rs.Name) {
        let reply = {
            info: "Please complete the form before you submit it"
        }
        res.send(reply);
    } else {
        obj.Course.push({
            CourseID: req.body.courseId,
            Name: req.body.name,
            StartDate: req.body.startDate,
            EndDate: req.body.endDate,
            Fees: req.body.fees,
            Description: req.body.description,
            ProgramID: req.body.programId,
            TermID: req.body.termId,
            DepartmentID: req.body.departmentId,
            DegreeID: req.body.degreeId,
            selMode: req.body.selMode,
        });
        let data = JSON.stringify(obj, null, 2);
        fs.writeFile('student_file.json', data, confirm);
        function confirm(err) {
            let reply = {
                Name: req.body.name,
                status: "success",
                info: ` :Data is recived thank you  ${Name}`
            }
            res.send(reply);
            console.log(reply);
        }
    }
});
///////////////////////////////////////////////delete course


// var exists = fs.existsSync('student_file.json');
// if (exists) {
//     var data = fs.readFileSync('student_file.json', 'utf8');
//     obj = JSON.parse(data);
// } else {
//     console.log('delete Term from dataset ')
//     var obj = { Term: [] };
// }

// app.delete('/courses/:id', (req, res) => {
//     var id = req.params.id;
//     const course = obj.Term.id;
//     delete obj.Term.id;
//     return res.status(200);
// });