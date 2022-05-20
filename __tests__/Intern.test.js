const Intern = require("../lib/Intern");

describe("Intern", () => {
    const intern = new Intern("New Guy", 3, "intern@workplace.com", "Harvard");
    it("should return the role of the Intern", () => {
        expect(intern.getRole()).toBe("Intern");
    });
    it("should return the school of the Intern", () => {
        expect(intern.getSchool()).toBe("Harvard");
    });
    it("should return the ID of the Intern", () => {
        expect(intern.getId()).toBe(3);
    });
    it("should return the name of the Intern", () => {
        expect(intern.getName()).toBe("New Guy");
    });
    it("should return the email of the Intern", () => {
        expect(intern.getEmail()).toBe("intern@workplace.com");
    });
});