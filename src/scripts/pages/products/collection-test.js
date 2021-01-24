class CollectionTest{
    constructor() {
        this.collectionSpacing();
    }

    collectionSpacing() {
        let container = document.querySelector('.hi-collection-container section');
        let spacing = container.dataset.sectionSpacing;
        let ulTag = document.querySelector('.hi-collection-container .hi-collection__list');
        if(spacing == 'true') {
            ulTag.classList.add('hi-collection__list--spacing');
        }
        else {
            ulTag.classList.remove('hi-collection__list--spacing');
        }
    }
}

export default CollectionTest;