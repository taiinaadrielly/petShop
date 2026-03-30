type MenuOpitions = '' | 'all' | 'dogs' | 'cats' | 'fishes'

export const createMenuObject = (activeMenu: MenuOpitions) => {
    let returnObject = {
        all: false,
        dogs: false,
        cats: false,
        fishes: false
    }
    if (activeMenu !== '') {
        returnObject[activeMenu] = true
    }

    return returnObject   
}