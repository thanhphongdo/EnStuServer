import { JsonObject, JsonProperty, JsonCustomConvert, JsonConvert, JsonConverter, OperationMode, ValueCheckingMode } from "json2typescript";
import { DateConverter, ParseObeject, PointerConverter } from './global';

export class Source extends ParseObeject{
    name?: string;
}

@JsonObject('Topic')
export class Topic extends ParseObeject {
    
    @JsonProperty('name', String)
    name?: String = undefined;


    @JsonProperty('source', PointerConverter)
    source?: Source = undefined;
}