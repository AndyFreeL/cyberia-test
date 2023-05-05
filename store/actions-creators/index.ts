import * as FilterActionCreators from './filter'
import * as ProjectActionCreators from './projects'
import * as FormActionCreators from './form'

export default {
    ...FilterActionCreators,
    ...ProjectActionCreators,
    ...FormActionCreators
}