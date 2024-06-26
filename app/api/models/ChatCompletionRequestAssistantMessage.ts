/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChatCompletionMessageToolCalls } from './ChatCompletionMessageToolCalls';
export type ChatCompletionRequestAssistantMessage = {
    /**
     * The contents of the assistant message. Required unless `tool_calls` or `function_call` is specified.
     *
     */
    content?: string | null;
    /**
     * The role of the messages author, in this case `assistant`.
     */
    role: ChatCompletionRequestAssistantMessage.role;
    /**
     * An optional name for the participant. Provides the model information to differentiate between participants of the same role.
     */
    name?: string;
    tool_calls?: ChatCompletionMessageToolCalls;
    /**
     * Deprecated and replaced by `tool_calls`. The name and arguments of a function that should be called, as generated by the model.
     * @deprecated
     */
    function_call?: {
        /**
         * The arguments to call the function with, as generated by the model in JSON format. Note that the model does not always generate valid JSON, and may hallucinate parameters not defined by your function schema. Validate the arguments in your code before calling your function.
         */
        arguments: string;
        /**
         * The name of the function to call.
         */
        name: string;
    };
};
export namespace ChatCompletionRequestAssistantMessage {
    /**
     * The role of the messages author, in this case `assistant`.
     */
    export enum role {
        ASSISTANT = 'assistant',
    }
}

