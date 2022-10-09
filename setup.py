# -*- coding: utf-8 -*-
# author:           inspurer(月小水长)
# create_time:      2022/10/9 13:16
# 运行环境           Python3.6+
# github            https://github.com/inspurer/streamlit-marquee

import setuptools

setuptools.setup(
    name="streamlit_marquee",
    version="0.0.7",
    author="buyixiao",
    author_email="2391527690xt@gmail.com",
    keywords=["marquee", "streamlit", "component"],
    license='MIT License',
    description="a streamlit marquee component",
    long_description=open("readme.md", encoding="utf-8").read(),
    long_description_content_type="text/markdown",
    url="https://github.com/inspurer/streamlit-marquee",
    packages=setuptools.find_packages(),
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    include_package_data=True,
    python_requires='>=3.6',
    install_requires=[
        "streamlit >= 0.75",
        "simplejson >= 3.0",
        "pandas",
        "numpy"
    ]
)
