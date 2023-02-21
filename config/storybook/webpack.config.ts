import { type BuildPath } from '../build/types/config'
import { type RuleSetRule } from 'webpack'
import type webpack from 'webpack'
import path from 'path'
import { buildCssLoader } from '../build/loaders/buildCssLoaders'
import { buildSvgLoader } from '../build/loaders/buildSvgLoader'

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPath = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }

    config.resolve.modules.push(paths.src)
    config.resolve.extensions.push('ts', 'tsx')
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if ((rule.test as string).includes('svg')) {
            return { ...rule, exclude: /\.svg$/i }
        }

        return rule
    })
    config.module.rules.push(buildSvgLoader())
    config.module.rules.push(buildCssLoader(true))

    return config
}
