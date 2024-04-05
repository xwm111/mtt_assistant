/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Usage statistics related to the run. This value will be `null` if the run is not in a terminal state (i.e. `in_progress`, `queued`, etc.).
 */
export type RunCompletionUsage = {
    /**
     * Number of completion tokens used over the course of the run.
     */
    completion_tokens: number;
    /**
     * Number of prompt tokens used over the course of the run.
     */
    prompt_tokens: number;
    /**
     * Total number of tokens used (prompt + completion).
     */
    total_tokens: number;
};

