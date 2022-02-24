const Employee = require("../lib/Employee.js");
const testEmployee=new Employee('sean',1,'sean@gmail.com');

test('checks that Employee constructor works', ()=>{
expect(testEmployee.name).toBe('sean');
expect(testEmployee.id).toBe(1);
expect(testEmployee.email).toBe('sean@gmail.com');

});


test('checks if the getName() method works',()=>{
    expect(testEmployee.getName()).toBe('sean');
});

test('checks if the getID() method works',()=>{
    expect(testEmployee.getID()).toBe(1);
});

test('checks if the getEmail() method works',()=>{
    expect(testEmployee.getEmail()).toBe('sean@gmail.com');
});


test('checks if the getRole() method works',()=>{
    expect(testEmployee.getRole()).toBe('Employee');
});