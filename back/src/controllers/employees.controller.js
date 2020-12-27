const Employee = require('../models/Employee');

const employeeCtrl = {};


employeeCtrl.getEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
}

employeeCtrl.createEmployee = async (req, res) => {
    const newEmployee = new Employee(req.body);
    console.log('new employee: ', newEmployee);
    await newEmployee.save();
    res.send({message: 'Employee Created'});
}

employeeCtrl.getEmployee = async (req, res) => {
    console.log(req.params);
    // Employee.findOne({_id: req.params.id}); also too:
    const employee = await Employee.findById(req.params.id);
    res.send(employee);
}

employeeCtrl.editEmployee = async (req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: 'Employee Updated'});
}

employeeCtrl.deleteEmployee = async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({status: 'Employee Deleted'});
}

module.exports = employeeCtrl;
