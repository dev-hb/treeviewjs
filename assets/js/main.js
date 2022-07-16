import TreeViewJS from "./core/TreeViewJS.js";

new TreeViewJS('treeview-js', [
    {
        'text' : 'home',
        'children' : [
            {
                'text' : 'our story',
                'children' : [
                    {
                        'text' : 'level3',
                        'children' : []
                    }
                ]
            },
            {
                'text' : 'team',
                'children' : []
            }
        ],
    },
    {
        'text' : 'services',
        'children' : [
            {
                'text' : 'design',
                'children' : []
            },
            {
                'text' : 'development',
                'children' : []
            }
        ],
    },
    {
        'text' : 'contact us',
        'children' : []
    }
]);