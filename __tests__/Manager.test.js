const Manager = require("../lib/Manager");

describe("Manager", () => {
    const manager = new Manager("Mr. Manager", 2, "email@email.com", 123456);

    it("should return the manager office number", () => {
        expect(manager.getManagerOffice()).toBe(123456);
    });
    it("should return the role of the Manager", () => {
        expect(manager.getRole()).toBe("Manager");
    });
    it("should return the id of the Manager", () => {
        expect(manager.getId()).toBe(2);
    });
    it("should return the email of the Manager", () => {
        expect(manager.getEmail()).toBe("email@email.com");
    });
    it("should return the name of the Manager", () => {
        expect(manager.getName()).toBe("Mr. Manager");
    });
});