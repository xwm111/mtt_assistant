/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateModerationRequest = {
    /**
     * The input text to classify
     */
    input: (string | Array<string>);
    /**
     * Two content moderations models are available: `text-moderation-stable` and `text-moderation-latest`.
     *
     * The default is `text-moderation-latest` which will be automatically upgraded over time. This ensures you are always using our most accurate model. If you use `text-moderation-stable`, we will provide advanced notice before updating the model. Accuracy of `text-moderation-stable` may be slightly lower than for `text-moderation-latest`.
     *
     */
    model?: (string | 'text-moderation-latest' | 'text-moderation-stable');
};

