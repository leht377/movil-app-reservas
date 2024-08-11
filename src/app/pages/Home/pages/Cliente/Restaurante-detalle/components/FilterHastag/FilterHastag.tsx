import React, { useEffect, useState } from 'react'
import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import FilterBadge from './FilterBadge'
import Modal from '@/app/components/Modal'
import { HashtagEntity } from '@/dominio/entities'
import MyIcon from '@/app/components/MyIcon'
import theme from '@/common/theme'

const ModalFiltros = ({ isVisible, onClose, hastags, onSelectHastag }) => {
  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <View
        style={{
          flexDirection: 'row',
          gap: 2,
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}
      >
        <FlatList
          data={hastags}
          renderItem={({ item }) => (
            <FilterBadge
              title={`# ${item?.getNombre()}`}
              onPress={() => onSelectHastag(item?.getId())}
              isPlus={true}
            />
          )}
          contentContainerStyle={{
            gap: 5
          }}
          numColumns={2}
          keyExtractor={(item) => item.getId()}
        />
      </View>
    </Modal>
  )
}

const FilterHastag = ({ onSelectFilters }) => {
  const [hastags, setHastags] = useState<HashtagEntity[]>([
    new HashtagEntity('3', 'romeo'),
    new HashtagEntity('4', 'julieta'),
    new HashtagEntity('8', 'morocha'),
    new HashtagEntity('9', 'sondeo'),
    new HashtagEntity('10', 'pushh')
  ])

  const [hastagLibres, setHastagsLibres] = useState<HashtagEntity[]>([])
  const [hastagsSelecionados, setHastagsSelecionados] = useState<HashtagEntity[]>([])

  useEffect(() => {
    setHastagsLibres(hastags)
    setHastagsSelecionados([])
  }, [hastags])

  const [visible, setVisible] = useState(false)

  const handleAddHastags = (id) => {
    const hastag = hastagLibres.find((h) => h.getId() === id)
    if (!hastag) return
    setHastagsSelecionados([...hastagsSelecionados, hastag])
    setHastagsLibres(hastagLibres.filter((h) => h.getId() != id))
  }

  const handleDeleteHastags = (id) => {
    const hastag = hastagsSelecionados.find((h) => h.getId() === id)
    if (!hastag) return
    setHastagsSelecionados(hastagsSelecionados.filter((h) => h.getId() != id))
    setHastagsLibres([...hastagLibres, hastag])
  }

  useEffect(() => {
    onSelectFilters(hastagsSelecionados)
  }, [hastagsSelecionados])
  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 2,
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center'
      }}
    >
      {hastagsSelecionados.map((item) => (
        <FilterBadge
          title={`# ${item?.getNombre()}`}
          onPress={() => handleDeleteHastags(item?.getId())}
          key={item?.getId()}
        />
      ))}

      <TouchableWithoutFeedback onPress={() => setVisible(true)}>
        <MyIcon nombre={'add-circle-sharp'} tamano={32} color={theme.colors.primary} />
      </TouchableWithoutFeedback>

      <ModalFiltros
        isVisible={visible}
        onClose={() => setVisible(false)}
        hastags={hastagLibres}
        onSelectHastag={handleAddHastags}
      />
    </View>
  )
}

export default FilterHastag
