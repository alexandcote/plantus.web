module.exports = {
    'extends': [
        'airbnb'
    ],
    'env' : {
      'browser': true,
    },
    'parser': 'babel-eslint',
    'plugins': [
        'react',
        'flowtype',
    ],
    'rules': {
        'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
        'react/jsx-closing-bracket-location': [1, { selfClosing: 'after-props', nonEmpty: 'tag-aligned' }],
        'react/require-default-props': 0,
    }
};
