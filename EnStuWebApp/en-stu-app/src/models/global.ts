import { JsonObject, JsonProperty, JsonCustomConvert, JsonConvert, JsonConverter, OperationMode, ValueCheckingMode } from "json2typescript";

export class Pointer {
    className?: string = undefined;
    objectId?: string = undefined;
    __type?: string = undefined;
    [key: string]: any;
}

@JsonConverter
export class DateConverter implements JsonCustomConvert<Date> {
    serialize(date: Date): any {
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    }
    deserialize(date: any): Date {
        return new Date(date);
    }
}

@JsonConverter
export class PointerConverter implements JsonCustomConvert<any> {
    serialize(data: any): any {
        return data;
    }
    deserialize(data: any): any {
        let pointer: Pointer = new Pointer();
        let iso = /^(\d{4})(?:-?W(\d+)(?:-?(\d+)D?)?|(?:-(\d+))?-(\d+))(?:[T ](\d+):(\d+)(?::(\d+)(?:\.(\d+))?)?)?(?:Z(-?\d*))?$/;
        for (let i in data) {
            if (iso.test(data[i])) {
                pointer[i] = new Date(data[i]);
            } else {
                pointer[i] = data[i];
            }
        }
        return pointer;
    }
}

export class ParseObeject {
    @JsonProperty('objectId', String)
    id?: string = undefined;

    @JsonProperty('updatedAt', DateConverter)
    updatedAt?: Date = undefined;

    @JsonProperty('createdAt', DateConverter)
    createdAt?: Date = undefined;
}