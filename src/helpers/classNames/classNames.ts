type Mods = Record<string, boolean | string>


export function classNames (cls: string, mods: Mods, additional: string[] ): string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([cls, value]) => Boolean(value) )
            .map(([cls, value])=> cls)
    ].join(' ')
}

classNames('removeBtn', {hovered: true, selectable: true, red: false}, ['train'])

'remove-btn hovered selectable train'