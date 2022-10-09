<marquee>streamlit-marquee</marquee>

### what is it

a marquee component for streamlit

### how it realizes

since the html tag `<marquee>` has been declared as deprecated.

As an alternative, use css animation to realize

### supported attributes

* background
* fontSize
* color
* content
* width
* lineHeight
* animationDuration

### how to use

##### demo 1 (recommend)

```python
import streamlit_marquee as st_marquee

st_marquee(**{
    'background': "#ff0000",
    'font-size': '12px',
    "color": "#ffffff",
    'content': 'here is custom marquee component~',
    'width': '600px',
    'lineHeight': "35px",
    'animationDuration': '5s',
})
```

##### demo 2

```python
import streamlit_marquee as st_marquee

st_marquee(content='here is custom marquee component~')
```

