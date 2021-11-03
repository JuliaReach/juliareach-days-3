# do not remove this first line
using PkgPage
using FranklinUtils
using Franklin

#
# Feel free to add whatever custom hfun_* or lx_*
# you might want to use in your site here
#

function env_column(e, _)
    md = Franklin.content(e)
    _, kwargs = lxargs(lxproc(e), "column")
    return _column(md; kwargs...)
end

function _column(md; colclass="col")
    return html("<div class=\"$colclass\">") * md * html("</div>")
end
