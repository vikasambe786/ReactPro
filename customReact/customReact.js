function customRender(reactElement,container){
    /*
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    container.appendChild(domElement)
    */

    const docElement=document.createElement(reactElement.type)
    docElement.innerHTML=reactElement.children;

    for (const prop in reactElement.props) {
        if(prop==='children')continue;;
        docElement.setAttribute(prop,reactElement.props[prop]);
        container.appendChild(docElement)
    }
}
const reactElement={
    type: 'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to Visit Google'
}
const mainContainer=document.querySelector('#root')

customRender(reactElement,mainContainer)