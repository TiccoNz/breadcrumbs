//const url = "http://www.webmatematik.dk/lektioner/matematik-b/trigonometri/cosinusrelationerne"

const url = "http://sciencemadeeasy.dk/IT/Programming/JavaScript"

const splitUrl = url.split('/')

splitUrl

const makeBreadcrumb = () => {
    let breadcrumb = ""

    for (i = 3; i < splitUrl.length; i++) {
        breadcrumb = breadcrumb + splitUrl[i] + ' ' + '/' + ' '
    }

    return breadcrumb
}

console.log(splitUrl[3])

splitUrl <= 3 ? false : makeBreadcrumb() 

console.log(makeBreadcrumb())
