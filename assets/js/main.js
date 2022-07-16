import TreeViewJS from "./core/TreeViewJS.js";


window.onmousemove = (e) => {
    //console.log(e.clientY)
}

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