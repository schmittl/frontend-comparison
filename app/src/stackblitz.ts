import sdk from '@stackblitz/sdk'

export interface StackblitzOptions {
    framework: string
    example: string
    id: string
}

export function embedStackblitz(options: StackblitzOptions) {
    sdk.embedGithubProject(
        options.id,
        `schmittl/frontend-comparison/tree/main/examples/${options.example}/${options.framework}`,
        {
            height: 400,
            openFile: 'README.md',
        }
    )
}
