# -*- coding: utf-8 -*-
# author:           inspurer(月小水长)
# create_time:      2022/10/9 11:45
# 运行环境           Python3.6+
# github            https://github.com/inspurer/streamlit-marquee


name = 'streamlit_marquee'

import os
parent_dir = os.path.dirname(os.path.abspath(__file__))
build_dir = os.path.join(parent_dir, "frontend")

import streamlit.components.v1 as components
streamlit_marquee = components.declare_component(
    name,
    path=build_dir
)
