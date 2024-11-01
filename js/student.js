const students = [
    { name: 'geetha', subject: 'Math', marks: 65 },
    { name: 'padma', subject: 'English', marks: 98 },
    { name: 'priya', subject: 'Science', marks: 72 },
    
];

function displayStudents() {
    const tbody = document.getElementById('students-body');
    tbody.innerHTML = ''; 

    students.forEach(student => {
        const row = `<tr>
            <td>${student.name}</td>
            <td>${student.subject}</td>
            <td>${student.marks}</td>
        </tr>`;
        tbody.insertAdjacentHTML('beforeend', row);
    });
}

function filterStudents() {
    const filter = document.getElementById('filter').value.toLowerCase();
    const filteredStudents = students.filter(student => student.name.toLowerCase().includes(filter));
    
    const tbody = document.getElementById('students-body');
    tbody.innerHTML = ''; 

    filteredStudents.forEach(student => {
        const row = `<tr>
            <td>${student.name}</td>
            <td>${student.subject}</td>
            <td>${student.marks}</td>
        </tr>`;
        tbody.insertAdjacentHTML('beforeend', row);
    });
}

function sortStudents() {
    students.sort((a, b) => b.marks - a.marks);
    displayStudents();
}

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text('Student Marks Report', 14, 16);
    
    let tableData = [['Name', 'Subject', 'Marks']];
    students.forEach(student => {
        tableData.push([student.name, student.subject, student.marks]);
    });

    doc.autoTable({
        head: tableData[0],
        body: tableData.slice(1),
    });

    doc.save('students.pdf');
}


displayStudents();


