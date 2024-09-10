import { describe, it, expect } from "vitest";
import { ExportedClass, ExportedEnum, ExportedType, ExportedType2 } from "./index";

describe("ExportedEnum", () => {
    it("should have the correct values", () => {
        expect(ExportedEnum.success).toBe("success");
        expect(ExportedEnum.info).toBe("info");
        expect(ExportedEnum.warning).toBe("warning");
        expect(ExportedEnum.error).toBe("error");
    });
});

describe("ExportedType", () => {
    it("should have the correct properties", () => {
        const exportedType: ExportedType = {
            message: "Test message",
            severity: ExportedEnum.info,
        };
        expect(exportedType.message).toBe("Test message");
        expect(exportedType.severity).toBe(ExportedEnum.info);
    });
});


describe("ExportedClass", () => {
    it("should be instantiated correctly", () => {
        const exportedClass = new ExportedClass({
            message: "Test message",
            severity: ExportedEnum.warning,
        });
        expect(exportedClass.exportMessage.message).toBe("Test message");
        expect(exportedClass.exportMessage.severity).toBe(ExportedEnum.warning);
    });

    it("should return the correct string from toExportString()", () => {
        const exportedClass = new ExportedClass({
            message: "Test message",
            severity: ExportedEnum.error,
        });
        expect(exportedClass.toExportString()).toBe(
            "Export message: [error] Test message"
        );
    });
});

