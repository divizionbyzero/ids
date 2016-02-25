#Folder settings
project_type = :stand_alone
http_path = "/"
relative_assets = true      #because we're not working from the root
css_dir = "styles"          #where the CSS will saved
sass_dir = "styles/components"           #where our .scss files are
images_dir = "images"    #the folder with your images
fonts_dir = fonts

# You can select your preferred output style here (can be overridden via the command line):
output_style = :expanded # After dev :compressed

# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = false

# Obviously
preferred_syntax = :sass

# Sourcemaps for Chrome DevTools

sass_options = {:sourcemap => true}
# sass_options = {:debug_info => true}
sourcemap = true