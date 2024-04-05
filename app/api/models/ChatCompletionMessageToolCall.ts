/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ChatCompletionMessageToolCall = {
    /**
     * The ID of the tool call.
     */
    id: string;
    /**
     * The type of the tool. Currently, only `function` is supported.
     */
    type: ChatCompletionMessageToolCall.type;
    /**
     * The function that the model called.
     */
    function: {
        /**
         * The name of the function to call.
         */
        name: string;
        /**
         * The arguments to call the function with, as generated by the model in JSON format. Note that the model does not always generate valid JSON, and may hallucinate parameters not defined by your function schema. Validate the arguments in your code before calling your function.
         */
        arguments: string;
    };
};
export namespace ChatCompletionMessageToolCall {
    /**
     * The type of the tool. Currently, only `function` is supported.
     */
    export enum type {
        FUNCTION = 'function',
    }
}

