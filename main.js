document.querySelector('#intro').addEventListener('click', () => {
    document.querySelector('#puslapis').classList.add('openDialog');
    const modalas = document.createElement('dialog');

    const div1 = document.createElement('div');
    const modalName = document.createElement('h1');
    const modalNameText = document.createTextNode('INTRO');
    modalName.appendChild(modalNameText);

    const close = document.createElement('img');
    close.setAttribute('src', './resources/xmark-solid.svg');
    close.addEventListener('click', e => {
        modalas.close();
        modalas.remove();
        document.querySelector('#puslapis').classList.remove('openDialog');
    })

    div1.append(modalName, close);

    const div2 = document.createElement('div');
    const modalVideo = document.createElement('video');
    modalVideo.setAttribute('src', './resources/tab-1.mp4');
    modalVideo.controls = true;

    const modalParagraph1 = document.createElement('p');
    const modalParagraph1Text = document.createTextNode('Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum recusandae exercitationem maxime, in voluptatem vero provident temporibus magnam officia blanditiis?');
    modalParagraph1.appendChild(modalParagraph1Text);
    const modalParagraph2 = document.createElement('p');
    const modalParagraph2Text = document.createTextNode('Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum recusandae exercitationem maxime, in voluptatem vero provident temporibus magnam officia blanditiis?');
    modalParagraph2.appendChild(modalParagraph2Text);

    div2.append(modalVideo, modalParagraph1, modalParagraph2);
    modalas.append(div1, div2);

    document.querySelector('#modalui').appendChild(modalas);
});