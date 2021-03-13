module.exports = {
    types: [
        {      value: 'init',      name: 'init:     First Commit'    },
        {      value: 'feat',      name: 'feat:     New Feature'    },
        {      value: 'fix',      name: 'fix:      Fix Bug'    },
        {      value: 'doc',      name: 'doc:      Update Docs'    },
    ],
    scopes: [],
    messages: {
    type: '选择更改类型:\n',
        scope: '更改的范围:\n',
        subject: '简短描述:\n',
        body: '详细描述. 使用"|"换行:\n',
        breaking: 'Breaking Changes列表:\n',
        footer: '关闭的issues列表. E.g.: #31, #34:\n',
        confirmCommit: '确认提交?'
},
}
