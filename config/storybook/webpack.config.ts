import { type RuleSetRule } from 'webpack'
import type webpack from 'webpack'
import path from 'path'
import { type BuildPaths } from '../../config/build/types/config'
import { buildCssLoader } from '../../config/build/loaders/buildCssLoaders'

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }
    config.resolve.modules.push(paths.src)
    config.resolve.extensions.push('.ts', '.tsx')

    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if ((rule.test as string).includes('svg')) {
            return { ...rule, exclude: /\.svg$/i }
        }

        return rule
    })

    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
    })
    config.module.rules.push(buildCssLoader(true))

    return config
}
