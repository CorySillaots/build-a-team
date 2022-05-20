const Employee = require("../lib/Employee");

describe("Employee", () => {
    const employee = new Employee("John Smith", 1, "joe@blow.com")
    it("should return the name of the employee", () => {
        expect(employee.getName()).toBe("John Smith");
    });

    it("should return the ID of the employee", () => {
        expect(employee.getId()).toBe(1);
    });

    it("should return the email of the employee", () => {
        expect(employee.getEmail()).toBe("joe@blow.com");
    });

    it("should return the role of the employee", () => {
        expect(employee.getRole()).toBe("Employee");
    });
});