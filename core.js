const textElement = document.getElementById('text')
const ButtonsElement = document.getElementById('buttons')

function startDecisionTree() {
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerHTML = textNode.headtext

    while (ButtonsElement.firstChild) {
        ButtonsElement.removeChild(ButtonsElement.firstChild)
    }

    const custom = document.createElement('div')
    custom.innerHTML = textNode.customHTML;
    custom.classList.add('custom')
    document.body.appendChild(custom)

    textNode.buttons.forEach(ibutton => {
        const button = document.createElement('button')
        button.innerHTML = "<p class=\"p\"><b><big>" + ibutton.text + "</big></b><br>" + ibutton.desc + "</p>" + ibutton.customHTML;
        button.classList.add('btn')
        button.addEventListener('click', () => selectButtonNode(ibutton))
        ButtonsElement.appendChild(button)
    })
}

function selectButtonNode(button) {
    const nextTextNodeId = button.nextText
    if (nextTextNodeId <= 0) {
        return startDecisionTree()
    }
    showTextNode(nextTextNodeId)
}

const textNodes = [
    /* MAIN MENU */
    {
        id: 1,
        headtext: '<b>USB Type-C and Power Delivery Solutions</b> <br> Type of product:',
        customHTML: '',
        buttons: [{
                text: 'Sink',
                desc: 'Your product only consumes power',
                customHTML: '<img src="media/sink.png" style="center" width="150">',
                nextText: 100
            },
            {
                text: 'Source',
                desc: 'Your product only deliver power',
                customHTML: '<img src="media/source.png" style="center" width="150">',
                nextText: 200
            },
            {
                text: 'Dual Role',
                desc: 'Your product consumes and/or deliver power',
                customHTML: '<img src="media/drp.png" style="center" width="150">',
                nextText: 3000
            }
        ]
    },

    /* SINK */
    {
        id: 100,
        headtext: 'Required power',
        customHTML: '',
        buttons: [{
                text: 'Fixed 5V, 15W max',
                desc: 'max 3A',
                customHTML: '',
                nextText: 1000
            },
            {
                text: 'More than 15W',
                desc: 'or different voltage (e.g. 9V, 15V, 20V)',
                customHTML: '',
                nextText: 1001
            }
        ]
    },

    /* SOURCE */
    {
        id: 200,
        headtext: 'Required power',
        customHTML: '',
        buttons: [{
                text: 'Fixed 5V, 15W max',
                desc: 'max 3A',
                customHTML: '',
                nextText: 2000
            },
            {
                text: 'More than 15W',
                desc: 'or different voltage (e.g. 9V, 15V, 20V)',
                customHTML: '',
                nextText: 2001
            }
        ]
    },


    /* SOLUTION SINK */
    {
        id: 1000,
        headtext: '<b>Legacy sink - no Power Delivery protocol needed</b>',
        customHTML: 'Port protection IC: <a href="https://www.st.com/en/protection-devices/tcpp01-m12.html">TCPP01</a>  \
                    <br>                                                                                                \
                    <div class="schematics">                                                                            \
                        <a href="media/schem_SNK_No_UCPD.pdf" target="_blank">                                          \
                            <img class="img-schem" src="media/schem_SNK_No_UCPD.svg">                                   \
                        </a>                                                                                            \
                    </div>                                                                                              \
                    <a href="index.html"><img class="home" src="media/home.png" alt="home"></a>',
        buttons: []
    },
    {
        id: 1001,
        headtext: '<b>Power Delivery + TCPP01</b>',
        customHTML: 'Port protection IC: <a href="https://www.st.com/en/protection-devices/tcpp01-m12.html">TCPP01</a>  \
                    <br>                                                                                                \
                    <div class="schematics">                                                                            \
                        <a href="media/schem_SNK.pdf" target="_blank">                                                  \
                            <img class="img-schem" src="media/schem_SNK.svg">                                           \
                        </a>                                                                                            \
                    </div>                                                                                              \
                    <a href="index.html"><img class="home" src="media/home.png" alt="home"></a>',
        buttons: []
    },

    /* SOLUTION SOURCE */
    {
        id: 2000,
        headtext: '<b>Legacy source - no Power Delivery protocol needed</b>',
        customHTML: 'Port protection IC: <a href="https://www.st.com/en/protection-devices/tcpp02-m18.html">TCPP02</a>  \
                    <br>                                                                                                \
                    <div class="schematics">                                                                            \
                        <a href="media/schem_SRC_No_UCPD.pdf" target="_blank">                                          \
                            <img class="img-schem" src="media/schem_SRC_No_UCPD.svg">                                   \
                        </a>                                                                                            \
                    </div>                                                                                              \
                    <a href="index.html"><img class="home" src="media/home.png" alt="home"></a>',
        buttons: []
    },
    {
        id: 2001,
        headtext: '<b>Power Delivery + TCPP02</b>',
        customHTML: 'Port protection IC: <a href="https://www.st.com/en/protection-devices/tcpp02-m18.html">TCPP02</a>  \
                    <br>                                                                                                \
                    <div class="schematics">                                                                            \
                        <a href="media/schem_SRC.pdf" target="_blank">                                                  \
                            <img class="img-schem" src="media/schem_SRC.svg">                                           \
                        </a>                                                                                            \
                    </div>                                                                                              \
                    <a href="index.html"><img class="home" src="media/home.png" alt="home"></a>',
        buttons: []
    },

    /* SOLUTION DRP */
    {
        id: 3000,
        headtext: '<b>Power Delivery + TCPP03</b>',
        customHTML: 'Port protection IC: <a href="https://www.st.com/en/protection-devices/tcpp03-m20.html">TCPP03</a>  \
                    <br>                                                                                                \
                    <div class="schematics">                                                                            \
                        <a href="media/schem_DRP.pdf" target="_blank">                                                  \
                            <img class="img-schem" src="media/schem_DRP.svg">                                           \
                        </a>                                                                                            \
                    </div>                                                                                              \
                    <a href="index.html"><img class="home" src="media/home.png" alt="home"></a>',
        buttons: []
    },
]

startDecisionTree()