/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents if a given text input is potentially harmful.
 */
export type CreateModerationResponse = {
    /**
     * The unique identifier for the moderation request.
     */
    id: string;
    /**
     * The model used to generate the moderation results.
     */
    model: string;
    /**
     * A list of moderation objects.
     */
    results: Array<{
        /**
         * Whether any of the below categories are flagged.
         */
        flagged: boolean;
        /**
         * A list of the categories, and whether they are flagged or not.
         */
        categories: {
            /**
             * Content that expresses, incites, or promotes hate based on race, gender, ethnicity, religion, nationality, sexual orientation, disability status, or caste. Hateful content aimed at non-protected groups (e.g., chess players) is harassment.
             */
            hate: boolean;
            /**
             * Hateful content that also includes violence or serious harm towards the targeted group based on race, gender, ethnicity, religion, nationality, sexual orientation, disability status, or caste.
             */
            'hate/threatening': boolean;
            /**
             * Content that expresses, incites, or promotes harassing language towards any target.
             */
            harassment: boolean;
            /**
             * Harassment content that also includes violence or serious harm towards any target.
             */
            'harassment/threatening': boolean;
            /**
             * Content that promotes, encourages, or depicts acts of self-harm, such as suicide, cutting, and eating disorders.
             */
            'self-harm': boolean;
            /**
             * Content where the speaker expresses that they are engaging or intend to engage in acts of self-harm, such as suicide, cutting, and eating disorders.
             */
            'self-harm/intent': boolean;
            /**
             * Content that encourages performing acts of self-harm, such as suicide, cutting, and eating disorders, or that gives instructions or advice on how to commit such acts.
             */
            'self-harm/instructions': boolean;
            /**
             * Content meant to arouse sexual excitement, such as the description of sexual activity, or that promotes sexual services (excluding sex education and wellness).
             */
            sexual: boolean;
            /**
             * Sexual content that includes an individual who is under 18 years old.
             */
            'sexual/minors': boolean;
            /**
             * Content that depicts death, violence, or physical injury.
             */
            violence: boolean;
            /**
             * Content that depicts death, violence, or physical injury in graphic detail.
             */
            'violence/graphic': boolean;
        };
        /**
         * A list of the categories along with their scores as predicted by model.
         */
        category_scores: {
            /**
             * The score for the category 'hate'.
             */
            hate: number;
            /**
             * The score for the category 'hate/threatening'.
             */
            'hate/threatening': number;
            /**
             * The score for the category 'harassment'.
             */
            harassment: number;
            /**
             * The score for the category 'harassment/threatening'.
             */
            'harassment/threatening': number;
            /**
             * The score for the category 'self-harm'.
             */
            'self-harm': number;
            /**
             * The score for the category 'self-harm/intent'.
             */
            'self-harm/intent': number;
            /**
             * The score for the category 'self-harm/instructions'.
             */
            'self-harm/instructions': number;
            /**
             * The score for the category 'sexual'.
             */
            sexual: number;
            /**
             * The score for the category 'sexual/minors'.
             */
            'sexual/minors': number;
            /**
             * The score for the category 'violence'.
             */
            violence: number;
            /**
             * The score for the category 'violence/graphic'.
             */
            'violence/graphic': number;
        };
    }>;
};

