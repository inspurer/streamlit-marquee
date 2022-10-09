![streamlit-marquee.gif](https://s2.loli.net/2022/10/09/Pxe3rL5CKoXJOMp.gif)

# what is it

a marquee component for streamlit

# how to use

first, install via pip online
```
pip install streamlit-marquee
```

or download the [wheel file](https://pypi.org/project/streamlit-marquee/#files) and install offline

``
pip install {{the downloaded wheel file path in your pc}}
``

or just download the source-code.

then, there are two demos below.

##### demo 1 (recommend)

```python
from streamlit_marquee import streamlit_marquee

streamlit_marquee(**{
    # the marquee container background color
    'background': "#ff0000",
    # the marquee text size
    'font-size': '12px',
    # the marquee text color
    "color": "#ffffff",
    # the marquee text content
    'content': 'here is custom marquee component~',
    # the marquee container width
    'width': '600px',
    # the marquee container line height
    'lineHeight': "35px",
    # the marquee duration
    'animationDuration': '5s',
})
```

##### demo 2

```python
from streamlit_marquee import streamlit_marquee

streamlit_marquee(content='here is custom marquee component~')
```

# how it realizes

since the html tag `<marquee>` has been declared as deprecated.

as an alternative, use css animation to realize.


# supported attributes

* background
* fontSize
* color
* content
* width
* lineHeight
* animationDuration

you can also download the source code and change to support more attributes such as transition-timing-function.
any question, please open [issues](https://github.com/inspurer/streamlit-marquee/issues).