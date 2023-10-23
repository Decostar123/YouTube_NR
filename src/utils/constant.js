const GOOGLE_API_KEY  = "AIzaSyCivFbfJhLrlYejRLPJJh8qnqqtEaSpXkQ"; 

export const YOUTUBE_VIDEOS_API = 
 "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" 
 + GOOGLE_API_KEY ; 


export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const PROFILE_URL = "https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png" ; 

export const SEND_URL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL8AAACZCAMAAABJwRsfAAAAbFBMVEX///8qJiMAAAAmIR78/Pzn5+YdGBT29vYtKCWcm5oWEg8qJyJRT00WEAonIyAYEQ2RkI4bGBEhHBkwLSoSCgC9vLs5ODhcWlnw8PBIRkTOzcw1MjB0cnCzsrJqamkIAQB+fHqko6Pd3NqGhYOkDWd3AAACUklEQVR4nO3a25KiMBAGYBJCOBqYSEQRBOH933HDLO6KMDNb7gXpqv/zcN1tOp2Y4HkAAAAAAAAAAAAAAAAAAAAAAAAA7xCh/ewdxH9oGxN4hFMYOcuKYO8o3hecfD/nlTnvHci7Yh4xJvklrsO9Q3mHCI+aWTq/NoZgBsJrD+yT0sm1COhN5PD2kbI5Bd7dzO/JLOi0JMOeJGVV1B6thtokj+ijaSZIdaM1EwLOliS/xgOhFPoyWiYQ+fzYtNOaQKKOgqv/MgIsUh/6QmZhvstl8CxNbU/yO/5oR44LstUAzO2oy+JafLZTpyvJvE7hP0NhV7XKTLE7Hb+X6e3wpy/N2eh6O6r5HOwmv7PtyOmZEPaH9MvwbWbqoC/j4LlaRsIbTl9M4b+DkPPM4XZUJFH0KPntoUiZ7C5F7eYI2F0E5wepfV89Td1VIenydGvdbEeDuRdNdTkdldJayqdUlmWkEz0ObqZgifNQmzYe+1tlM8nLzo7JUxrR9FIdb8ywd6TfEuE5GOq6vcd9dcr5anXI7e5ocHMEJk+B2UzOQS9fE1AHXuwX34/I/v4/1D9zt/4H0/5D/4lc7T9T/y8T7autpkmg/z/W3+/I0tH1l/z+h/j+0+7/Fen9f7ZaoOYf3r4J/P8i/v+X9vmD8O7yZYmdq57I+U9wXe1vIiXpnL8RP/9cnT9rWufPy/N/n9r5//L+paN2/7J1/yXI3H8Jry3n4EneP1K//6V+/079+YeCK9LPn5ie9vM/1J+/AgAAAAAAAAAAAAAAAAAAAAAAAIp+AfrhJj83TKqYAAAAAElFTkSuQmCC" ;
// https://youtube.googleapis.com/youtube/v3/search?part=apple&key=AIzaSyCivFbfJhLrlYejRLPJJh8qnqqtEaSpXkQ

// https://www.googleapis.com/youtube/v3/search?part=snippet&q=applw&key=AIzaSyCivFbfJhLrlYejRLPJJh8qnqqtEaSpXkQ

export const SMALL_SEARCH_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAZlBMVEX///8AAADx8fHp6en7+/v29vZMTExGRkZPT0+urq5ZWVleXl7e3t69vb3t7e3T09MdHR1UVFSioqKSkpKMjIyDg4PKyspqamoZGRnDw8N9fX2YmJhwcHA0NDQ8PDwmJiYtLS0SEhLPPqNHAAAEAUlEQVR4nO1a4ZqqIBA10dQiNd1cy7J8/5e8CuqCVuvAeOHer/OzXeA4zJwZYBzngw8++Nfhx4QmlMauicVJEp3qsmk2DE15u2YF/XvL+7Ta3zZz3MNT8lfsQfLgyfIDbqdkbQLn8M36HHXkr7e+d6hnxn/cHvfpj2m21n4kogXS+hqdE0pITAil5+gSpJIl1iDgX4QlTud49g9uUQn2CAk6g8M4efnG42j+s1UVLgF3NEGdzb9fhH8Yt+uIaQiyHR1tgbePTpviBWgyfFe+0NOzYQCWVw5uECxX4Pjaj/lCYRANs4EUJ0LkMNjgAByX3LECo+gjEZ4G3RCHQ++JW5X48r4xfDLm8RUoRviec9AqJI5sikY163g7Nv7uqTOoOAN1lfN4bfGtPAHldiyUJ2h3stFyh96MmQaDtsbhW6G4lVxddloMHOfEZrkojY25tugWQF6oHhVfSIkmUfZIn2uSNgPH4bWGQuLOVQfOwD9mDx+X6gW0CMWvidCM0Dp22c11gg5j8h6gMOi9oQHKNFWqEVBnY9VfiXYyYza9wsYECmPegNezoCGEOdAZjUIMd25WMD7wjiJcpXPIkFxNTF6jAqsMq5ZwzgAczKw1JOVplypTuGxGwM760AG/A/pRLL8+UK9KAmDmZzu3Rb0yugK9K8MVpg7QkPhSL/degX3V0SgFlvxDIAVwfv8vKViwEWbd0YKgXEuaANmaCbTqUfQ5oAJtQZqyIFmvVLLcIFuLXrjl4MLNgvIVu4gnCidU80cZGw50FhxrLTjc928ARq84LLjoseC6qx+I4Q3Kl34WXH06MX+ENnkBbME1uA2PARY8idjwMDQ8jym7pMfH6zyPOcT8I+HwVKrEAeepdHwwTuFf4g+9FIBj3HMoP5uXmwFbXXkb2wBAThVtBOx1Oei0UPTY6ZaAYyPJ0i6KbDOFdsYV2ml+N+mTHrDOJ3X3AtJUNHbhPSQO2v4gtFY1l3etVT9diFW8lTgcdTSSQWwwKy+HuVa5RSV8N+v7kDkE2hwmbXa3a1R0bXaka7MrokstNvzVXEX8vcRhp39p4h2m3ZYNazZMJ7+m0bCWu5P9AeN4tqjlUjC4J5PGeAJvA7Tavli7w7zx9Cj9PcA5pvq02r1qv52v4KL7Q4+4dcBj2vTzNk3wugnZle2grdUTtMGQUEp+iTbZH7DOyiB4clyEJprHJ/6gr9UK8OVY1tdqFaBrNRwTrdbO3SqYarURf5BjE/BCgwjZJ5G0GobVtBrCYYXcDYVng1bLOQv3/WshbNBqV44L7Ny9DBN/MKLVclyY0WoL/ME6rVa4wcGAkLsNMRC12hSDH602x8Dh5yxju8DRxqZhBp1Wm2bwwQcfWI8/8BgrmtRQApoAAAAASUVORK5CYII="


export const subjects = [ "All", "Comedy" , "Javascript" , "Action","Computer Programming", "Gaming",
"Data Structures", "Music","React", 
"Thoughts","Memes","Lectures","IIT", "JEE", "Anime" , "Sitcomes", "Gaming","Indian soap Operas",
"Film Criticism" , "Music", "Akshay Kumar","Decostar Sharma" , "Arijit Singh", "Thoughts" ] ; 
