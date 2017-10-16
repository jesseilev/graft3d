module MyStyles exposing (..)

import Style exposing (StyleSheet, style)
import Style.Color as Color
import Style.Border as Border
import Style.Font as Font
import Style.Scale as Scale
import Style.Shadow as Shadow
import Color exposing (Color)
import Html.Attributes as Attr
import Color.Convert exposing (colorToCssRgba)


type Style
    = None
    | Main
    | Sidebar
    | SelectorItem
    | Header
    | Nav
    | NavLink
    | Badge
    | Hairline
    | DeleteButton
    | NewButton
    | Dropdown
    | DropdownItem
    | PropertyLabel
    | WasdOverlay


type Variation
    = Selected
    | NavMenu
    | Title


stylesheet : StyleSheet Style Variation
stylesheet =
    Style.styleSheet
        [ Style.style None
            []
        , Style.style Main
            [ Font.typeface
                [ Font.font "Gill Sans"
                , Font.font "Trebuchet MS"
                , Font.font "helvetica"
                , Font.font "sans-serif"
                ]
            , Font.light
              --weight "lighter"
            , Color.text Color.lightCharcoal
            , Style.cursor "default"
            , Style.focus []
            ]
        , Style.style Sidebar
            [ Color.background Color.lightGrey
            , Border.right 0.5
            , Color.border <| Color.greyscale 0.2
            , Shadow.box
                { offset = ( 10, 0 )
                , blur = 30
                , size = -25
                , color = Color.black
                }
            ]
        , Style.style SelectorItem
            [ Color.background Color.lightGrey
            , Style.hover [ Color.background Color.grey ]
            , Style.variation Selected
                [ Color.background <| Color.greyscale 0.7
                , Style.hover [ Color.background <| Color.greyscale 0.7 ]
                ]
            , Style.cursor "pointer"
            ]
        , Style.style Badge
            [ Border.rounded 2
            , Shadow.simple
            , Style.pseudo "active"
                [ Color.background Color.lightCharcoal
                , Shadow.box noShadow
                ]
            ]
        , Style.style Header
            [ Font.size (scaled 3)
            , Style.variation Title
                [ Font.size (scaled 10) ]
            ]
        , Style.style Nav
            [ Font.alignRight
            , Color.background <| Color.greyscale 0.75
            , Color.text Color.white
              -- , Shadow.simple
            ]
        , Style.style NavLink
            [ Font.alignRight
            , Color.text Color.lightGrey
            , Style.cursor "pointer"
            , Style.hover
                [ Color.background <| Color.greyscale 0.7
                ]
            ]
        , Style.style Hairline
            [ Color.border <| Color.rgba 0 0 0 0.1
            , Border.bottom 1
            ]
        , Style.style DeleteButton
            [ Border.rounded 2
            , Border.all 0
            , Color.background <| Color.greyscale 0.2
            , Color.text deleteRed
            , Shadow.deep
            , Style.hover [ Color.background <| Color.greyscale 0.25 ]
            , Style.pseudo "active"
                [ Shadow.box noShadow
                , Color.background <| Color.greyscale 0.3
                ]
            , Font.typeface
                [ Font.font "Gill Sans"
                , Font.font "Trebuchet MS"
                , Font.font "helvetica"
                , Font.font "sans-serif"
                ]
              --, Font.light
            ]
        , Style.style NewButton
            [ Border.rounded 2
            , Shadow.simple
            , Border.all 0
            , Color.text Color.white
            , Color.background <| Color.greyscale 0.4
              --, Style.hover [ Color.background <| Color.greyscale 0.25 ]
              --, Style.pseudo "active"
              --    [ Color.background <| Color.greyscale 0.3
              --    , Shadow.box noShadow
              --    ]
            ]
        , Style.style Dropdown
            [ Color.background <| Color.greyscale 0.75
            , Shadow.deep
            , Style.prop "z-index" "100"
            ]
        , Style.style DropdownItem
            [ Color.text <| Color.lightGrey
              --, Color.background <| Color.darkGrey
              --, Style.hover [ Color.background <| Color.greyscale 0.3 ]
            , Color.background <| Color.greyscale 0.7
            , Style.hover [ Color.background <| Color.greyscale 0.65 ]
            , Style.variation NavMenu
                [ Color.background <| Color.greyscale 0.7
                , Style.hover [ Color.background <| Color.greyscale 0.65 ]
                ]
            , Style.cursor "pointer"
            ]
        , Style.style PropertyLabel
            [ Font.weight 400 ]
        , Style.style WasdOverlay
            [ Font.size (scaled 3)
            , Font.weight 300
            , Font.typeface
                [ Font.font "Courier New"
                , Font.font "Courier"
                , Font.font "monospace"
                ]
            , Color.text Color.white
            , Style.prop "z-index" "10"
            ]
        ]


type alias InlineStyles =
    List ( String, String )


slider : InlineStyles
slider =
    [ "width" => "100%"
    , "-webkit-appearance" => "none"
    , "height" => "2px"
    ]


opacitySlider : Color -> InlineStyles
opacitySlider color =
    [ "background"
        => ("linear-gradient(to right, rgba(0,0,0,0), " ++ colorToCssRgba color)
    ]


colorPicker : InlineStyles
colorPicker =
    [ "width" => "100%" ]


shapePicker : InlineStyles
shapePicker =
    [ "padding" => "20px"
    , "background" => "yellow"
    ]


wasdOverlay : InlineStyles
wasdOverlay =
    [ "z-index" => "10"
    , "font-size" => "20px"
    , "font-weight" => "200"
    , "font-family" => "\"Courier New\", Courier, monospace"
    , "color" => "white"
    ]


zIndex : Int -> InlineStyles
zIndex n =
    [ "z-index" => toString n ]


(=>) =
    (,)


scaled =
    Scale.modular 16 1.05


babyElectric =
    Color.rgb 180 220 255


deleteRed =
    Color.rgb 220 100 150


noShadow =
    { offset = ( 0, 0 ), size = 0, blur = 0, color = Color.black }
