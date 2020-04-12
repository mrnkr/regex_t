#include <stdlib.h>
#include <stdbool.h>
#include <string.h>
#include <regex.h>
#include "emscripten.h"

EMSCRIPTEN_KEEPALIVE
bool match_regex(const char* pattern, const char* to_match)
{
    bool ret = false;
    int reti;
    regex_t r;

    reti = regcomp(&r, pattern, REG_EXTENDED|REG_NEWLINE);
    
    if (!reti)
    {
        reti = regexec(&r, to_match, 0, NULL, 0);

        if (!reti)
        {
            ret = true;
        }
    }

    regfree(&r);
    return ret;
}
