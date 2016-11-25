module.exports = function(){
    var templates = [
        {
            command: 'module',
            template: 'ModuleTemplate.ts',
            parameters: [
                {
                    name: 'Name',
                    required: true,
                    message: 'Please enter a Module name'
                },
                {
                    name: 'Path',
                    required: false,
                    message: 'Please enter a path or leave this empty',
                    default: function () {
                        return process.cwd();
                    }
                }
            ],
        },
        {
            command: 'routing',
            template: 'RoutingTemplate.ts',
            parameters: [
                {
                    name: 'Name',
                    required: true,
                    message: 'Please enter a Module name'
                },
                {
                    name: 'Path',
                    required: false,
                    message: 'Please enter a path or leave this empty',
                    default: function () {
                        return process.cwd();
                    }
                }
            ],
        },
        {
            command: 'service',
            template: 'ServiceTemplate.ts',
            parameters: [
                {
                    name: 'Name',
                    required: true,
                    message: 'Please enter a Service name'
                },
                {
                    name: 'url',
                    required: true,
                    message: ''
                },
                {
                    name: 'Path',
                    required: false,
                    message: '',
                    default: function () {
                        return process.cwd();
                    }
                },
            ],
        },
        {
            command: 'router',
            template: 'RouterTemplate.ts',
            parameters: [
                {
                    name: 'Name',
                    required: true,
                    message: 'Please enter a Router name'
                },
                {
                    name: 'Path',
                    required: false,
                    default: function () {
                        return process.cwd();
                    }
                },
            ],
        },
        {
            command: 'component',
            template: 'component/component/ComponentTemplate.ts',
            res: 'templates/component/css/{{name}}.component.min.scss',
            html: 'templates/component/templates/{{name}}.component.html',
            subfolder: "components",
            parameters: [
                {
                    name: 'Name',
                    message: 'Please enter a Component name',
                    required: true
                },
                {
                    name: 'Path',
                    required: false,
                    default: function () {
                        return process.cwd();
                    }
                }
            ],
        },
    ];
    return templates;
}();
