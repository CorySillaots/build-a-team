const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    const engineer = new Engineer("Thomas Tank Engineer", 4, "thomas@railroad.com", "username")
    it("should return the name of the Engineer", () => {
        expect(engineer.getName()).toBe("Thomas Tank Engineer");
    });
    it("should return the github username of the Engineer", () => {
        expect(engineer.getGithub()).toBe("username");
    });
    it("should return the id of the Engineer", () => {
        expect(engineer.getId()).toBe(4);
    });
    it("should return the email of the Engineer", () => {
        expect(engineer.getEmail()).toBe("thomas@railroad.com");
    });
    it("should return the role of the Engineer", () => {
        expect(engineer.getRole()).toBe("Engineer");
    });
});

