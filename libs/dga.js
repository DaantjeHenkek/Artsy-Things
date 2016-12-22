/*
 Made by Daan Henke, plz no stealerinoes
 */

function generate_fractal_tree_recursive(x, y, angle, iterations, options)
{
    var default_opts = {
        width: 3,
        size: 8,
        angle_mod_min: 0,
        angle_mod_max: 30,
        colour_base: random_int(0, 360),
        colour_mod_min: 0,
        colour_mod_max: 40,
        terminate_branch_chance: 5
    };
    var opts = {};

    opts = $.extend(opts, default_opts ,options);

    if (opts.terminate_branch_chance != 0)
    {
        if (parseInt(random_int(opts.terminate_branch_chance)) == 0)
        {
            iterations -= 2;
        }
    }

    var x2 = x + parseInt(Math.cos(radians(angle)) * iterations * opts.size);
    var y2 = y + parseInt(Math.sin(radians(angle)) * iterations * opts.size);

    strokeWeight(opts.width);
    stroke(return_css_hsl((opts.colour_base + (x2 / 9) + random_int(opts.colour_mod_min, opts.colour_mod_max)) % 360, 100, 50));
    line(x, y, x2, y2);

    console.log(iterations);
    if (iterations > 0)
    {
        generate_fractal_tree_recursive(x2, y2, angle + random_int(opts.angle_mod_min, opts.angle_mod_max), iterations - 1, opts);
        generate_fractal_tree_recursive(x2, y2, angle - random_int(opts.angle_mod_min, opts.angle_mod_max), iterations - 1, opts);
    }
    else {
        return 0;
    }
}

function return_css_hsl(h, s, l)
{
    return "hsl(" + parseInt(h).toString() + "," + parseInt(s).toString() + "%," + parseInt(l).toString() + "%)";
}

function random_int(min, max) {
    return parseInt((Math.random() * (max - min + 1)), 10) + min;
}