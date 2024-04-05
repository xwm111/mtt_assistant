/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateFineTuningJobRequest = {
    /**
     * The name of the model to fine-tune. You can select one of the
     * [supported models](/docs/guides/fine-tuning/what-models-can-be-fine-tuned).
     *
     */
    model: (string | 'babbage-002' | 'davinci-002' | 'gpt-3.5-turbo');
    /**
     * The ID of an uploaded file that contains training data.
     *
     * See [upload file](/docs/api-reference/files/upload) for how to upload a file.
     *
     * Your dataset must be formatted as a JSONL file. Additionally, you must upload your file with the purpose `fine-tune`.
     *
     * See the [fine-tuning guide](/docs/guides/fine-tuning) for more details.
     *
     */
    training_file: string;
    /**
     * The hyperparameters used for the fine-tuning job.
     */
    hyperparameters?: {
        /**
         * Number of examples in each batch. A larger batch size means that model parameters
         * are updated less frequently, but with lower variance.
         *
         */
        batch_size?: ('auto' | number);
        /**
         * Scaling factor for the learning rate. A smaller learning rate may be useful to avoid
         * overfitting.
         *
         */
        learning_rate_multiplier?: ('auto' | number);
        /**
         * The number of epochs to train the model for. An epoch refers to one full cycle
         * through the training dataset.
         *
         */
        n_epochs?: ('auto' | number);
    };
    /**
     * A string of up to 18 characters that will be added to your fine-tuned model name.
     *
     * For example, a `suffix` of "custom-model-name" would produce a model name like `ft:gpt-3.5-turbo:openai:custom-model-name:7p4lURel`.
     *
     */
    suffix?: string | null;
    /**
     * The ID of an uploaded file that contains validation data.
     *
     * If you provide this file, the data is used to generate validation
     * metrics periodically during fine-tuning. These metrics can be viewed in
     * the fine-tuning results file.
     * The same data should not be present in both train and validation files.
     *
     * Your dataset must be formatted as a JSONL file. You must upload your file with the purpose `fine-tune`.
     *
     * See the [fine-tuning guide](/docs/guides/fine-tuning) for more details.
     *
     */
    validation_file?: string | null;
};

