export enum ExportedEnum {
    success = "success",
    info = "info",
    warning = "warning",
    error = "error",
}

export type ExportedType = {
    message: string;
    severity: ExportedEnum;
};

export type ExportedType2 = "" | 0 | false | null | undefined;

export interface ExportedInterface {
    toExportString(): string;
}

export class ExportedClass implements ExportedInterface {
    exportMessage: ExportedType = {
        message: "Hello",
        severity: ExportedEnum.success,
    };

    constructor(exportMessage: ExportedType) {
        Object.assign(this, {
            exportMessage,
        });
        return this;
    }

    toExportString(): string {
        return `Export message: [${this.exportMessage.severity}] ${this.exportMessage.message}`;
    }
}
